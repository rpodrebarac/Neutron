// A variable to hold all blogs.
let neutronDB;
let neutronCollection;

// The BLogsDAO class.
module.exports = class BlogsDAO {
    static async insertDataBase(connection) {
        try {
            neutronDB = await connection.db("neutron");
            neutronCollection = await neutronDB.collection("blogs");
        } catch (error) {
            console.log("Unable to establish a connection: " + error);
        } 
    }

    // Obtain all blogs.
    static async retrieveAllBlogs() {
        // Retrieve all blogs and sort from most recent to least recent.
        let blogsData = await neutronCollection
            .find({})
            .sort([["date", -1]]);
        let blogs = await blogsData.toArray();  

        // Return the retrieved blogs.
        return blogs;
    }

    // Obtain blogs that fall under a specified category.
    static async retrieveBlogsByCategory(category) {
        // Retrieve and sort the blogs by category.
        let filteredBlogsData = await neutronCollection
            .find({ category: { $all: [category] } })
            .sort([["date", -1]]);
        let filteredBlogs = await filteredBlogsData.toArray();

        // Return the retrieved and filtered blogs.
        return filteredBlogs;
    }

    // Obtain a specific blog.
    static async retrieveASpecificBlog(titleFilter) {
        // Search for the specific blog.
        let specificBlogData = await neutronCollection.findOne({ title: titleFilter });

        // Return the specific blog.
        return specificBlogData;
    }

    // Post a new blog to the database.
    static async postBlog(blogData) {
        const result = await neutronCollection.insertOne(blogData);

        // Ensure that the blog has been successfully posted.
        let { ok } = result;
        
        if (!ok) {
            console.log("Your blog failed to post correctly.");
        } else {
            console.log("Your blog correctly posted.");
        }
    }
}
