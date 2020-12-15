
const { default: Axios } = require('axios')
const express = require('express')
const newsRouter = express.Router()

newsRouter.get('', async (req, res) => {
    // res.render('news')

    try {
        const newAPI = await Axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`)
        res.render('news', { articles: newAPI.data })

    } catch (err) {
        if (err.response) {
            res.render('news', { articles: null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }
        else if (res.requiest) {
            res.render('news', { articles: null })
            console.log(err.requiest)
        } else {
            res.render('news', { articles: null })
            console.log('Error', err.message)
        }


    }

})

newsRouter.get('/:id', async (req, res) => {

    let articleID = req.params.id

    try {
        const newAPI = await Axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleID}`)
        res.render('newSingle', { article: newAPI.data })

    } catch (err) {
        if (err.response) {
            res.render('newSingle', { article: null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }
        else if (res.requiest) {
            res.render('newSingle', { article: null })
            console.log(err.requiest)
        } else {
            res.render('newSingle', { article: null })
            console.log('Error', err.message)
        }


    }

})

// search
newsRouter.post('', async (req, res) => {

    let search = req.params.search

    try {
        const newAPI = await Axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)
        res.render('newSearch', { articles: newAPI.data })

    } catch (err) {
        if (err.response) {
            res.render('newSearch', { articles: null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }
        else if (res.requiest) {
            res.render('newSearch', { articles: null })
            console.log(err.requiest)
        } else {
            res.render('newSearch', { articles: null })
            console.log('Error', err.message)
        }


    }

})



module.exports = newsRouter