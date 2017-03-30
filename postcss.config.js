module.exports = {
    plugins: [
        require('autoprefixer')({}),
        require('cssnano')({}),
        require('precss')({}),
        require('react-css-modules')({})
    ]
}