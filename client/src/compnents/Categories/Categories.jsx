import React from 'react'
import "./Categories.scss";
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'> 
        <div className="col">
            <div className="row">
                <img src="https://klike.net/uploads/posts/2023-02/1675245379_3-63.jpg" alt="" />
                <button>
                    <Link className='link' to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src="https://b3616fd552.clvaw-cdnwnd.com/320a7aaf5dca7a589fe6da6761f5c9f2/200001703-896ac896ae/12-90.jpg?ph=b3616fd552" alt="" />
                <button>
                    <Link className='link' to="/products/1">New Season</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src="https://www.1zoom.ru/big2/82/160476-avallonist.jpg" alt="" />
                <button>
                    <Link className='link' to="">Good looks</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src="https://fb.ru/media/i/2/7/7/3/4/4/6/i/2773446.jpg" alt="" />
                <button>
                    <Link className='link' to="">Cosmetic</Link>
                </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://w-dog.ru/wallpapers/15/4/474281307918190/nezamknutaya-seksualnosti-ulichnyj-stil-devushka-shlyapka-gorod-rossiya.jpg" alt="" />
                <button>
                    <Link className='link' to="">Acsesuars</Link>
                </button>
                </div>
            </div>
        </div>
        <div className="row">
            <img src="https://imageio.forbes.com/specials-images/imageserve/622ccbeed1c4accce28c5da1/0x0.jpg?format=jpg&amp;width=1200&amp;fit=bounds" alt="" />
                <button>
                    <Link className='link' to="">Shoes</Link>
                </button></div>
        </div>
    </div>
  )
}

export default Categories