import { memo, useCallback, useMemo, useReducer, useState } from "react";
import { debounce } from "lodash";

const sampleData = [
    {
      id: 1,
      title: '多色餅乾',
      price: 80,
      category: 'color',
    },
    {
      id: 2,
      title: '綠色馬卡龍',
      price: 120,
      category: 'color',
    },
    {
      id: 3,
      title: '甜蜜左擁右抱',
      price: 200,
      category: 'love',
    },
    {
      id: 4,
      title: '巧克力心連心',
      price: 160,
      category: 'love',
    },
    {
      id: 5,
      title: '粉係馬卡龍',
      price: 1200,
      category: 'color',
    },
];


const DataList = memo(({filterProducts, handleSelectCheck}) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <td>品項</td>
                    <td>分類</td>
                    <td>價格</td>
                    <td>選擇</td>
                </tr>
            </thead>
            <tbody>
                {filterProducts.map((product) => {
                return (
                    <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>
                            <input type="checkbox" 
                                value={product.title}
                                onChange={handleSelectCheck}
                            />
                        </td>
                    </tr>
                );
                })}
            </tbody>
        </table>
    )
})


function reducer(state, action){

    console.log(state, action);
    
    switch (action.type) {
      case 'UPDATE_ASCENDING':
        return {
          ...state, // 包含預設狀態
          ascending: action.payload
        }
      case 'UPDATE_SEARCH':
        return {
          ...state, // 包含預設狀態
          search: action.payload
        }
      case 'UPDATE_ITEMS':
        return {
          ...state, // 包含預設狀態
          items: action.payload
        }
      case 'UPDATE_CATEGORY':
        return {
          ...state, // 包含預設狀態
          category: action.payload
        }
      default:
        return state;
    }
}

function ReactSearchSystem(){

    console.log("Render: ReactSearchSystem")

    const [state, dispatch] = useReducer(reducer, {
        products: sampleData,
        ascending: true,
        search: '',
        items: [],
        category: ''
    })
    const [text, setText] = useState('');

    // 

    function handleAscending(value) {
      dispatch({
        type: "UPDATE_ASCENDING",
        payload: value,
      });
    }


    const handleSearch = debounce((value) => {
        dispatch({
          type: "UPDATE_SEARCH",
          payload: value,
        });
    }, 1000);

    function handleCategory(e) {
        const checked = e.target.checked;
        const value = checked ? e.target.value : "";

        dispatch({
          type: "UPDATE_CATEGORY",
          payload: value,
        });
      }

    const handleSelectCheck = useCallback((e) => {
        let array = [];
        if (e.target.checked) { // 如果有選擇，就加入本次的選項
          array = [...state.items, e.target.value];
        } else {
          // 沒有，就移除該項目
          array = state.items.filter((item) => item !== e.target.value);
        }
  
        dispatch({
          type: 'UPDATE_ITEMS',
          payload: array
        })
    }, [state])

    const filterProducts = useMemo(() => {
        return [...state.products]
          .filter((product) => {
            return product.title.match(state.search);
          })
          .filter((product) => {
            return product.category.match(state.category);
          })
          .sort((a, b) => {
            return state.ascending ? a.price - b.price : b.price - a.price;
          });
    }, [state]);
    

    return (
      <>
        ReactSearchSystem
        <hr />

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="額外新增的字串"
        />

        <br />

        升降冪：
        <input
          type="checkbox"
          checked={state.ascending}
          onChange={(e) => handleAscending(e.target.checked)}
        />{" "}
        {state.ascending.toString()}

        <br />

        分類：
        <div>
            <input
            id="category-love"
            type="checkbox"
            // checked={state.category}
            value={'love'}
            onChange={(e) => handleCategory(e)}
            />
            <label htmlFor="category-love">love</label>
        </div>
        <div>
            <input
            id="category-color"
            type="checkbox"
            // checked={state.category}
            value={'color'}
            onChange={(e) => handleCategory(e)}
            />
            <label htmlFor="category-color">color</label>
        </div>

        <br />

        搜尋(debounce)：
        <input
          type="search"
        //   value={state.search}
          onChange={(e) => handleSearch(e.target.value)}
        />

        <br />

        已選擇：<span>{state.items.toString()}</span>

        <hr />

        <DataList
          filterProducts={filterProducts}
          handleSelectCheck={handleSelectCheck}
        ></DataList>
      </>
    );
}

export default ReactSearchSystem;