const Router =require("express").Router()

const {CreateStudent,GetStudent,UpdateStudent,DeleteStudent}=require("../Controller/StudentController")


Router.post("/Createstudent",CreateStudent)
Router.get("/Getstudent",GetStudent)
Router.put("/Updatestudent/:id",UpdateStudent)
Router.delete("/Deletestudent/:id",DeleteStudent)



module.exports=Router