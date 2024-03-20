 //step -1  import mongoDB first
const mongoose = require('mongoose');

// step-2 A schema defines the structure of your documents (think of it like a blueprint)
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true 
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    age: {
      type: Number,
      default: 18
    },
    registeredOn: {
      type: Date,
      default: Date.now
    }
  });

  //step-3 A model provides an interface to interact with a specific collection in your MongoDB database.
  const User = mongoose.model('User', userSchema); 

// step-4 connecting mongo to backend

mongoose.connect('mongodb://localhost:27017/your_database_name')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));


// creating a new user 
const newUser = new User({
  name: 'Alice',
  email: 'alice@example.com'
});

newUser.save()
  .then(() => console.log('User saved'))
  .catch(err => console.error('Error saving user', err));

// some mongoose methods

// find():
// Syntax: Model.find(filter, projection, options)
// Explanation: Finds all documents that match the given filter. You can also specify a projection to limit which fields are returned, and options to control sorting, limiting, etc.

// findOne():
// Syntax: Model.findOne(filter, projection, options)
// Explanation: Finds the first document that matches the given filter. Like find(), you can also specify a projection and options.

// findById():
// Syntax: Model.findById(id, projection)
// Explanation: Finds a single document by its _id. It's a shorthand for findOne({ _id: id }). Optionally, you can provide a projection to specify which fields to include or exclude.

// create():
// Syntax: Model.create(doc)
// Explanation: Creates a new document in the collection based on the provided object doc.

// updateOne():
// Syntax: Model.updateOne(filter, update, options)
// Explanation: Updates a single document that matches the filter with the specified update. Options can be used for various settings like upsert (create if not exists), multi (update multiple documents), etc.

// updateMany():
// Syntax: Model.updateMany(filter, update, options)
// Explanation: Updates all documents that match the filter with the specified update.

// findOneAndUpdate():
// Syntax: Model.findOneAndUpdate(filter, update, options)
// Explanation: Finds a document matching the filter, updates it according to the update, and returns the modified document. Options can be used for settings like new to return the modified document instead of the original.

// findByIdAndUpdate():
// Syntax: Model.findByIdAndUpdate(id, update, options)
// Explanation: Finds a document by its _id, updates it according to the update, and returns the modified document. Options can be used for settings like new to return the modified document instead of the original.

// deleteOne():
// Syntax: Model.deleteOne(filter)
// Explanation: Deletes a single document that matches the filter.

// deleteMany():
// Syntax: Model.deleteMany(filter)
// Explanation: Deletes all documents that match the filter.

// findOneAndDelete():
// Syntax: Model.findOneAndDelete(filter, options)
// Explanation: Finds a document matching the filter, deletes it, and returns the deleted document. Options can be used for various settings.

// findByIdAndDelete():
// Syntax: Model.findByIdAndDelete(id, options)
// Explanation: Finds a document by its _id, deletes it, and returns the deleted document. Options can be used for various settings.