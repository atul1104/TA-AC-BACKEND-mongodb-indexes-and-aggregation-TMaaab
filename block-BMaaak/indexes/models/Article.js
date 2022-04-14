var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
  },
  { timestamps: true }
);

articleSchema.index({ tags: 1 });
articleSchema.index({ title: 'text' });

module.exports = mongoose.model('Article', articleSchema);
