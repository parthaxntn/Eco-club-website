const blog = require("../models/blogModel"); //schema
const cloudinary = require("cloudinary");

//create blog
exports.createblog = async (req, res, next) => {
    try {
        let images = [];
        if (typeof req.body.images === "string") {
            images.push(req.body.images)
        }
        else images = req.body.images

        const imagesLink = [];

        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
                folder: "blog",
            });

            imagesLink.push({
                public_id: result.public_id,
                url: result.secure_url,
            })
        }

        req.body.images = imagesLink;
        const blog = await blog.create(req.body);
        res.status(201).json({
            success: true,
            blog
        })

    } catch (err) {
        res.send(err.message);
    }

}

//update blog
exports.updateblog = async (req, res, next) => {
    try {
        let blog = await blog.findById(req.params.id);
        if (!blog) {
            return res.status(500).json({
                success: false,
                message: "blog not found"
            })
        }

        let images = [];
        if (typeof req.body.images === "string") {
            images.push(req.body.images)
        }
        else images = req.body.images

        //checking if any image is uploded or not
        if (images !== undefined) {
            //removing old images
            for (let i = 0; i < blog.images.length; i++) {
                await cloudinary.v2.uploader.destroy(blog.images[i].public_id);
            }

            //updating image links
            const imagesLink = [];
            for (let i = 0; i < images.length; i++) {
                const result = await cloudinary.v2.uploader.upload(images[i], {
                    folder: "blog",
                });

                imagesLink.push({
                    public_id: result.public_id,
                    url: result.secure_url,
                })
            }
            req.body.images = imagesLink;
        }
        blog = await blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true,
            blog
        })
    } catch (err) {
        res.send(err.message);
    }
}

//Delete blog
exports.deleteblog = async (req, res, next) => {
    try {
        const blog = await blog.findById(req.params.id);
        if (!blog) {
            return res.status(500).json({
                success: false,
                message: "blog not found"
            })
        }

        //removing images from cloudinary
        for (let i = 0; i < blog.images.length; i++) {
            await cloudinary.v2.uploader.destroy(blog.images[i].public_id);
        }

        await blog.remove();

        res.status(200).json({
            success: true,
            message: "blog deleted"
        })
    } catch (err) {
        res.send(err.message);
    }
}


//Get one blog Detail
exports.getblogDetails = async (req, res, next) => {
    try {
        const blog = await blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "blog not found"
            })
        }

        res.status(200).json({
            success: true,
            blog,
        })
    } catch (err) {
        res.send(err.message);
    }
}


//get all blog
exports.getAllblog = async (req, res) => {
    try {
        const blogCount = await blog.countDocuments();
        const blog = await blog.find();
        res.status(201).json({
            success: true,
            blog,
            blogCount,
        })
    } catch (err) {
        res.send(err.message);
    }
}