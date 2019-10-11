const model=require('../models/index');

exports.get_documents=(req,res,next)=>{
  model.docs.findAll({})
      .then( (leave)=>{
        return res.json({
          error: false,
          data: leave,
        });
      })
      .catch((error)=>res.json({
        error: true,
        data: [],
        error: error,

      }));
}


exports.create_document=(req,res,next)=>{
    const {
      owner,
      name,
      attachment,
      emp_id}=req.body;
      const document=model.docs.create({
        owner,
        name,
        attachment,
        emp_id
      });

      return res.status(201).json({
        error:false,
        data:document,
        message:"Document successfuly created"
      })
};

exports.update_document=(req,res,next)=>{
    const doc_id=req.params.id;
    const {
        name,
        attachment}=req.body;
    model.docs.update({
      name,
      attachment
    },{
      where:{
        id:doc_id
      }
    });
    return res.status(201).json({
      error:false,
      message:"document has been updated"
    })

};

exports.delete_document=(req,res,next)=>{

     const doc_id=req.params.id;
     model.docs.destroy({
       where:{
         id:doc_id
       }
     });
     //code to delete file from where its stored
     return res.status(201).json({
       error:false,
       message:"Document has been deleted"
     })

};

exports.get_document=(req,res,next)=>{
  const doc_id=req.params.id;
  model.docs.findOne({
    where:{
      id:doc_id
    }
  })
  .then(doc=>{
    return res.status(200).json({
      error:false,
      data:doc
    })
  })
  .catch(error=>{
    return res.status(500).json({
      error:true,
      message:"Ooops something happened"
    })
  })
};
