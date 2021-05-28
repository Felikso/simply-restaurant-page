import React, { Component } from "react"

import styled from "styled-components"

import {
  SectionButton,
  MenuButton,
  Product,
  ProductList,
  Title,
} from "../../utils"


function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}


const getCategories = items => {
  let tempItems = items.map(items => {
    return /* items.dishes.category */ items.category
  })

  

/*   let tempCategories = []
  tempItems.map(item => {
    if (typeof item === "object") {
      item.map(cat => {
        if (tempCategories.indexOf(cat) < 0) {
          tempCategories.push(cat)
        }
      })
    }
  }) */
  let tempCategories = []
  tempItems.map(item => {
    tempCategories.push(item)
    tempCategories = tempCategories.filter(onlyUnique);
/*     if (typeof item === "object") {
      item.map(cat => {
        if (tempCategories.indexOf(cat) < 0) {
          tempCategories.push(cat)
        }
      })
    } */
  })

  let categories = Array.from(tempCategories)
  categories = ["wszystkie", ...categories]
  return categories
}

export default class MenuItemsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: props.menuItems,
      displayedItems: props.menuItems,
      currentCategory: "wszystkie",
      categories: getCategories(props.menuItems),
    }
  }

  handleItems = cat => {
    let tempItems = [...this.state.menuItems]
    if (cat === "wszystkie") {
      this.setState({
        displayedItems: tempItems,
        currentCategory: cat,
      })
    } /* else {
      let items = tempItems.filter(({ dishes }) => {
        return dishes.category.indexOf(cat) >= 0 
      })
      this.setState({
        displayedItems: items,
        currentCategory: cat,
      })
    } */
    else {
      let items = tempItems.filter(({ category }) => {
        return category.indexOf(cat) >= 0 
      })
      this.setState({
        displayedItems: items,
        currentCategory: cat,
      })
    }

   /*  console.log(items) */
    console.log('items')
    console.log(tempItems)
    console.log('tempItems')
  }

  render() {
    const displayedItems = this.state.displayedItems
    return (
      <div>
        <CategoryButtonWrapper>
          {this.state.categories.map((cat, index) => {
            return (
              <MenuButton
                style={{ margin: "0.4rem" }}
                key={index}
                onClick={() => this.handleItems(cat)}
              >
                {cat}
              </MenuButton>
            )
          })}
        </CategoryButtonWrapper>

        <CategoryButtonWrapper>
          <select onChange={(e) => this.handleItems(e.target.value)}>
          {this.state.categories.map((cat, index) => {
            return (
                  <option key={index} value={cat} onChange={() => this.handleItems(cat)}>
                  {cat}
                  </option>
            )
          })}
          </select>
        </CategoryButtonWrapper>

        <Title title={`${this.state.currentCategory} Items`} />
        <ProductList>
          {displayedItems.map(item => {
            console.log(item)
            console.log('this item')
            return (
              <Product
              key={item.id} 
              img={item.image.childImageSharp.gatsbyImageData} 
              product={item}
              />
            )
          })}
        </ProductList>
      </div>
    )
  }
}

const CategoryButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
