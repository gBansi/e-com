export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    resolve({ data })
  }
  );
}

export function fetchProductsByFilters(filter, sort, pagination) {
  let queryString = '';
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValues = categoryValues[categoryValues.length - 1]
      queryString += `${key}=${lastCategoryValues}&`
    }
  }
  for (var key in sort) {
    queryString += `${key}=${sort[key]}&`
  }
  console.log(pagination)
  for (var key in pagination) {
    queryString += `${key}=${pagination[key]}&`
  }
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products?' + queryString)
    const data = await response.json()
    resolve({ data })
  }
  );
}

