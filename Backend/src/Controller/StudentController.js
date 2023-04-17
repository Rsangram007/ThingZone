const StudentModel = require("../Model/studentModel");

const CreateStudent = async (req, res) => {
  try {
    const newstudent = new StudentModel({
      name: req.body.name,
      clssname: req.body.clssname,
      Gender: req.body.Gender,
    });
    const Student = await newstudent.save();
    return res.status(201).send({ data: Student });
  } catch (e) {
    return res.status(500).send({ data: e.message });
  }
};
const GetStudent = async (req, res) => {
  try {
    const Student = await StudentModel.find();

    return res.status(200).send({ data: Student });
  } catch (e) {
    return res.status(500).send({ data: e.message });
  }
};
const UpdateStudent = async (req, res) => {
  try {
    const Findid = await StudentModel.findById({_id:req.params.id});
    if (!Findid) {
      return res.status(404).send({ msg: "This ID is NOT Found In Db" });
    }
    console.log(req.body)
    console.log( req.params.id)
    const Student = await StudentModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    return res.status(200).send({ data: Student });
  } catch (e) {
    return res.status(500).send({ data: e.message });
  }
};
const DeleteStudent = async (req, res) => {
  try {
    const Findid = await StudentModel.findById({_id:req.params.id});
    if (!Findid) {
      return res.status(404).send({ msg: "This ID is NOT Found In Db" });
    }
    const Student = await StudentModel.findByIdAndDelete();

    return res.status(200).send({ data: Student,msg:"Deleted SucessFully" });
  } catch (e) {
    return res.status(500).send({ data: e.message });
  }
};

module.exports = { CreateStudent, GetStudent,UpdateStudent,DeleteStudent };
