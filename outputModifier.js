module.exports = () => {
    return (req, res) => {
        console.log(res.locals);
        res.jsonp(res.locals.data);
    };
  };6