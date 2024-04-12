const express = require('express')
const router = express.Router()

//home page
router.get("/", (req, res) => {
    res.render("home", {
        title: null,
        headTags: null,
        bodyTags: null
    })
})

//builder page
const builerHeadTags = [`
    <link rel="stylesheet" href="/builder/builder.css">

    <script src="//unpkg.com/grapesjs"></script>
    <link rel="stylesheet" href="//unpkg.com/grapesjs/dist/css/grapes.min.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script src="//unpkg.com/grapesjs-plugin-export"></script>
    <script src="//unpkg.com/grapesjs-tooltip"></script>
`]

const builderBodyTags = [`
    <script src="/builder/builderCustom.js"></script>
    <script src="/builder/builder.js"></script>
`]

router.get("/builder", (req, res) => {
    res.render("builder", {
        title: ' | Builder',
        headTags: builerHeadTags,
        bodyTags: builderBodyTags
    })
})

module.exports = router
