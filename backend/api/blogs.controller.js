const BlogsDAO = require("../dao/blogsDAO");

module.exports = class BlogsController {
    // "Send" the data from the database.
    static async apiSendBlogData(request, response) {
        let blogsData = await BlogsDAO.retrieveAllBlogs();
        response.json(blogsData);
    }
}

// Delete this if it becomes unnecessary.