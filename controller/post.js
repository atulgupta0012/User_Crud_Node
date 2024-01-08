const Post = require("../model/post");
const { post } = require("../routes");


//create post

module.exports = {
    create: async (req, res) => {
        const { title, description, userId } = req.body;
        const createObj = {
            title,
            description,
            userId
        };
        const createPost = await Post.create(createObj);

        const savedata = await createPost.save();
        return res.send(savedata);
    },

    // get all post

    getAll: async (req, res) => {
        try {
            const getallPosts = await Post.find();
            return res.json(getallPosts);
        } catch (error) {
            console.error('Error occours:', error.message);
            return res.status(500).json({ error: error.message });
        }
    },


    //get post by postid
    getById: async (req, res) => {
        try {
            const postId = req.params.postId;
            const post = await Post.findById(postId);

            if (!post) {
                return res.status(404).json({ message: "Post not found" });
            }


            else {
                return res.json(post);

            }

        } catch (error) {
            console.error('Error occurs:', error.message);
            return res.status(500).json({ error: error.message });
        }
    },



    //get user post by userId  
    getByUserId: async (req, res) => {
        try {
            const userId = req.params.userId;
            const userposts = await Post.find({ userId });

            if (!userposts) {
                return res.status(404).json({ message: "Posts are not available" });
            }
            else {
                return res.json(userposts);
            }

        } catch (error) {
            console.error('Error occurs:', error.message);
            return res.status(500).json({ error: error.message });
        }
    },


   findall: async (req, res) => {
        try {

            const allusers = await Post.aggregate([{

                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'finduser'
                }
            },
            
        ])

            return res.send(allusers)

        } catch (error) {

            return res.send(error)

        }
    }

};