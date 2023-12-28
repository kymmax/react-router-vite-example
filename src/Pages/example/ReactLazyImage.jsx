import { LazyLoadImage, LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "../../stylesheets/_lazyloadImage.scss";
import PlaceholderImage from '../../images/logo512.png';


const DemoLazyContent = () => {
    return (
        <>
            <p className="fs-1 text-danger">DemoLazyContent</p>
            <p className="text-danger">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, delectus. Quod est possimus illo sint dignissimos voluptatum porro voluptatem dolorum natus sunt fugiat inventore amet odit exercitationem architecto accusantium libero aliquam, quis unde iure minus! Soluta sapiente non asperiores mollitia corrupti pariatur minima et porro aperiam tenetur, aliquid dolor voluptates!</p>
        </>
    )
}


function LazyImage(){
    
    return (
        <>
            <p className="text-danger">npm i --save react-lazy-load-image-component</p>

            {(new Array(10)).fill(null).map((item,index) => {
                return (
                    <div className="mb-1" key={index}>
                        <LazyLoadImage
                        alt={''}
                        height={300}
                        effect="blur" // 使用 css 效果
                        src={`https://picsum.photos/200/300?random=${index}`} // use normal <img> attributes as props
                        placeholderSrc={PlaceholderImage}
                        width={200} />
                    </div>
                )
            })}

            <hr />

            {(new Array(10)).fill(null).map((item,index) => {
                return (
                    <div className="mb-1" key={index}>
                        <LazyLoadImage
                        alt={''}
                        height={300}
                        effect="custom" // 自定義的 css 名稱
                        src={`https://picsum.photos/200/300?random=v${index}`} // use normal <img> attributes as props
                        width={200} />
                    </div>
                )
            })}

            <hr />

            <LazyLoadComponent
                placeholder={<div className="custom"></div>}
                afterLoad={() => {
                    console.log("LazyLoadComponent onLoad!");
                }}
            >
                <DemoLazyContent />
            </LazyLoadComponent>
        </>
    )
}

export default LazyImage;