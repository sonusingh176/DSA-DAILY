// https://dummyjson.com/products


// You are working on an Express/Node.js API:

// app.get("/users", async (req, res) => {
//     const users = await User.findAll();

//     users.forEach(async (user) => {
//         await sendEmail(user.email);
//         console.log(user.email);
//     });

//     res.json({ message: "Emails sent" });
// });


async function getProducts(){
    const response= await fetch("https://dummyjson.com/products?limit=2");
    // console.log(response);

    const data= await response.json();
    // console.log(data);

    // data.products.forEach(async (product)=>{
    //     await sendEmail(product.title);
    //   console.log("Email sent:", product.title);
    // })

    await Promise.all(
        data.products.map(async (product)=>{
            await sendEmail(product.title);
            console.log("Email sent",product.title)
        })
    )

    console.log("All emails sent");

}

function sendEmail(product){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Email sent",product);
            resolve()
        },2000)
    })
}

getProducts();

// Assume there are 100 users.

// Interview questions:
// Is this code correctly waiting for all 100 emails to be sent before returning the response?
// If not, what is wrong?
// How would you fix it?
// If you had 100,000 users, would you use the same approach? Why or why not?

// Write your answer as you would in a real interview.