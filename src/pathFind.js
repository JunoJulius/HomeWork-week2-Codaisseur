function pathFind(path, object) {

  if (path.length === 0) return object

  return pathFind(path.slice(1), object[path[0]])
}









module.exports = {
  pathFind
};


// .value .keys
