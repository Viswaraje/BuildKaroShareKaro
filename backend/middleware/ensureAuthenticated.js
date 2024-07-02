export async function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
    //if we are not authenticated ,we will be directed to login page
	res.redirect(process.env.CLIENT_BASE_URL + "/login");
}