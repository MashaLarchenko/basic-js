module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let depth = 1;
    let maxDepth = 1;
    arr.forEach(item => {
      if (Array.isArray(item)) {
        const curr = this.calculateDepth(item);
        depth += curr;
        if (depth > maxDepth) {
          maxDepth = depth;
        };
      }
      depth = 1
    });
    return maxDepth;
  };
};