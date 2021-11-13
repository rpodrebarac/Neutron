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
        let blogsData = await neutronCollection.find({})
        let blogs = await blogsData.toArray();  

        // Log all blogs to the console to ensure that everything is functioning appropriately.
        // console.log(blogs);

        // Return the retrieved blogs.
        return blogs;
    }
}
