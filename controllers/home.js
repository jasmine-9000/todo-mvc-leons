module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getContact: (req, res) => {
        res.render('contact.ejs');
    }
}