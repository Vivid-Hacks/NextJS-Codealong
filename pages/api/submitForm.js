// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  console.log(req.query.email + "Just subscribed!")

  res.status(200).json({ status: "success" })
}