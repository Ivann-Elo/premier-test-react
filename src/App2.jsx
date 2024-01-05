import { Input } from "./components/form/Input.jsx";
import { Checkbox } from "./components/form/Checkbox.jsx";
import { ProductCategoryRow } from "./components/product/ProductCategoryRow.jsx";
import { ProductRow } from "./components/product/ProductRow.jsx";
import { useState } from "react";

const PRODUCTS = [
    { category: "Fruit", price: "€1", stocked: true, name: "Apple" },
    { category: "Fruit", price: "€2", stocked: true, name: "Dragonfruit" },
    { category: "Fruit", price: "€4", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "€2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "€4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "€3", stocked: true, name: "Peas" },
]


function App2() {

    const [showStockedOnly, setShowStockedOnly] = useState(false) 
    const [search, setSearch] = useState('') 

    const visibleProducts = PRODUCTS.filter(product => {
        if(showStockedOnly && !product.stocked){
            return false
        } 

        if(search && !product.name.includes(search)){
            return false
        }
        
        return true
    })

    return <div className="container my-3">
        <SearchBar 
            search={search}
            onSearchChange= {setSearch}
            showStockedOnly={showStockedOnly}
            onStockedOnlyChange={setShowStockedOnly}
        />
        <ProductTable products={visibleProducts} />
    </div>

}

// Création de la barre de navigation à partir des composant créer en externe
function SearchBar({ showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {
    return <div>
        <div className="mb-3">
            <Input
                value= {search}
                onChange={onSearchChange}
                placeholder="Rechercher..."
            />
            <Checkbox
                id="stocked"
                checked={showStockedOnly}
                onChange={onStockedOnlyChange}
                label="N'afficher que les produits en stock"
            />
        </div>
    </div>
}

// Création tu tableau d'affichage des produits
function ProductTable({ products }) {

    const rows = []
    let lastCategory = null

    for (let product of products) {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
        }

        lastCategory = product.category
        rows.push(<ProductRow product={product} key={product.name} />)
    }


    return <table className="table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

export default App2