const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export default async function user(req, res) {
  if (req.method === "POST") {

  const { name, email, password, username } = req.body;
   
  //  const userEmail = prisma.user.findMany({
  //     include: {
  //       email: email,
  //     },
  //   })
  //   if(userEmail){
  //     return res.status(200).send("email already exist");
  //   }
    // {
  //   return res.status(200).send("email already exist");
  // }
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
      username: username,
    },
  });

  return res.status(200).send("user cereated successfully");
}
}