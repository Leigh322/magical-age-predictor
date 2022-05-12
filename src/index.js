function getYouAge(bothYear) {
   var age = new Date().getFullYear() - bothYear
   console.log("You are " + age + " years old")
}
module.exports = {
    getYouAge
}