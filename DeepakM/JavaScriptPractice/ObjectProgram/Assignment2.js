//Count Product Cate
//An online shopping website stores products with categories. Count how many products belong to each category.


const products = {
    p1: { category: "Electronics" },
    p2: { category: "Furniture" },
    p3: { category: "Electronics" },
    p4: { category: "Books" },
    p5: { category: "Books" }
};

const categoryCounts = {};

for (const key in products) {
    const cat = products[key].category;
    categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
}

console.log(categoryCounts);