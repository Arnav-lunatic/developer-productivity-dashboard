import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/", (_req, res) => {
	const clientId = process.env.GITHUB_CLIENT_ID;
	const redirectUri = `${process.env.BACKEND_URL}/auth/github/callback`;

	const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user:email`;

	res.redirect(githubAuthUrl);
});

router.get("/callback", async (req, res) => {
	const code = req.query.code as string;

	const tokenRes = await axios.post(
		"https://github.com/login/oauth/access_token",
		{
			client_id: process.env.GITHUB_CLIENT_ID,
			client_secret: process.env.GITHUB_CLIENT_SECRET,
			code: code,
		},
		{
			headers: {
				Accept: "application/json",
			},
		},
	);

	const accessToken = tokenRes.data.access_token;

    const userRes = await axios.get("https://api.github.com/user", {
        headers: {
            Authorization: `token ${accessToken}`,
        },
    });

    const emailRes = await axios.get("https://api.github.com/user/emails", {
        headers: {
            Authorization: `token ${accessToken}`,
        },
    });

    const email = emailRes.data.find((e: any) => e.primary).email;

    console.log("GitHub User:", userRes.data.name);
    console.log("GitHub Email:", email);

    res.redirect(`${process.env.FRONTEND_URL}/success`)
});

export default router;
