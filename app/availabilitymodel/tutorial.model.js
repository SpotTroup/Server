module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      User: String,
      longitude: String,
      ownerid : String,
parentdeviceid: String,
available: Boolean,
type : String,
parkingtime : String,
active: Boolean,


    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("availability", schema);
  return Tutorial;
};
