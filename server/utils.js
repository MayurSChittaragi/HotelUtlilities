const formatMenuData = (data) => {
    const categoryData = {
        'North-Indian': [],
        'South-Indian': [],
        'Chinese': [],
        'Italian': [],
        'Beverages': []
    }
    data.forEach(item => {
        categoryData[item.category].push(item);
    });
    return categoryData;
}