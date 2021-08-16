export {};
// YS: Very nice!
export function userCookieRead(req, res, next) {
    try {
      const { userDetails } = req.cookies;

      if (!userDetails) throw new Error("Cookie was not found");

      const cookie = JSON.parse(userDetails);
      const { username, email } = cookie;
      req.username = username;
      req.email = email;

      next();

    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  }

  export function userCookieWrite(req, res, next) {
    try {
      const { username, email } = req.body;
      if ((!username) || (!email)) throw new Error("User details processing issues");

      const cookieToWrite: string = JSON.stringify({ username, email }); //YS: We don't want to add the users email in a cookie (security'
      res.cookie("userDetails", cookieToWrite, { maxAge: 900000, httpOnly: true });

      req.username = username;
      req.email = email;

      next();

    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  }