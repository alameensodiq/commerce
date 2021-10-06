const category = require('../model/categoryModel')



const categoryController = {
    getCategories: async (req, res)=> {
        try{
            const categories = await category.find()
            res.json(categories)
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    createcategory: async (req, res)=> {
        try{
            //if user have role=1 ----> admin
            //only admin can create,delete and update category
            const {name}= req.body
            const Category = await category.findOne({name})
            if(Category) return res.status(400).json({msg:"This category already exists."})

            const newCategory = new category({name})
            await newCategory.save()
            res.json({msg:"created a category"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    deletecategory: async (req, res)=> {
        try{
              await category.findOneAndDelete(req.params.id)
              res.json({msg:"Deleted a category"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updatecategory: async (req, res)=> {
        try{
             const {name}= req.body
             await category.findOneAndUpdate({_id:req.params.id}, {name})

             res.json({msg:"Updated a category"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}


module.exports = categoryController