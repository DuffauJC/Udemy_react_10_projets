import React, { useState } from 'react'
import './Scroll.css'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated } from 'react-spring'

export default function Scroll() {

    const [toggleTxt, setToggleTxt] = useState(false)

    const animation = useSpring({
        opacity: toggleTxt ? 1 : 0,
        transform: toggleTxt ? 'translateX(0)' : 'translateX(-50%)'
    })

    return (
        <div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto, voluptatem atque officia, tenetur similique quae obcaecati earum vero quibusdam sit quos laboriosam. Dolore unde recusandae voluptates debitis vel delectus reprehenderit, praesentium iusto quae ipsa, quaerat illum nam molestias molestiae minima deserunt provident sed. Vero quos sequi rerum voluptatum facilis repellendus enim et cumque, distinctio id exercitationem fuga consequuntur, quidem voluptatibus dolores molestias cum. Non odit quisquam ea? Ratione iste laudantium ducimus, doloribus, quis velit eveniet iure nostrum, dolor unde eius ut. Quo commodi quisquam, quia hic eveniet quae illum quasi excepturi! Animi autem laudantium maxime aut quam cumque sapiente nemo esse repellendus reiciendis quo enim illo, neque explicabo necessitatibus magnam et optio a accusantium doloremque in ipsum deserunt ullam. Assumenda facilis porro voluptas? Adipisci esse deserunt voluptatum iste vero ex obcaecati, provident accusamus perferendis, aperiam reiciendis sunt commodi expedita numquam inventore tempora omnis nisi. Velit, minima quidem culpa libero natus eius cumque explicabo, excepturi labore ipsa praesentium illum facere molestias asperiores molestiae vel quae ducimus ut harum. Neque eum quod necessitatibus doloribus asperiores magnam dignissimos deserunt vitae, sequi exercitationem culpa aliquam quasi sit rerum sed ea dolorum fugiat ratione, excepturi, velit beatae qui ipsa. Qui vero quod voluptatem illum.
            </p>

            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto, voluptatem atque officia, tenetur similique quae obcaecati earum vero quibusdam sit quos laboriosam. Dolore unde recusandae voluptates debitis vel delectus reprehenderit, praesentium iusto quae ipsa, quaerat illum nam molestias molestiae minima deserunt provident sed. Vero quos sequi rerum voluptatum facilis repellendus enim et cumque, distinctio id exercitationem fuga consequuntur, quidem voluptatibus dolores molestias cum. Non odit quisquam ea? Ratione iste laudantium ducimus, doloribus, quis velit eveniet iure nostrum, dolor unde eius ut. Quo commodi quisquam, quia hic eveniet quae illum quasi excepturi! Animi autem laudantium maxime aut quam cumque sapiente nemo esse repellendus reiciendis quo enim illo, neque explicabo necessitatibus magnam et optio a accusantium doloremque in ipsum deserunt ullam. Assumenda facilis porro voluptas? Adipisci esse deserunt voluptatum iste vero ex obcaecati, provident accusamus perferendis, aperiam reiciendis sunt commodi expedita numquam inventore tempora omnis nisi. Velit, minima quidem culpa libero natus eius cumque explicabo, excepturi labore ipsa praesentium illum facere molestias asperiores molestiae vel quae ducimus ut harum. Neque eum quod necessitatibus doloribus asperiores magnam dignissimos deserunt vitae, sequi exercitationem culpa aliquam quasi sit rerum sed ea dolorum fugiat ratione, excepturi, velit beatae qui ipsa. Qui vero quod voluptatem illum.
            </p>
            <Waypoint
                bottomOffset='30%'
                onEnter={() => {
                    if (!toggleTxt) {
                        setToggleTxt(true)
                    }
                }}
            />
            <animated.div style={animation}
                className='cta-section'>
                <h2>N'en ratez pas une miette'</h2>
                <form>
                    <label htmlFor="email">inscrivez-vous à la newsletter</label>
                    <input type="email" id="email"/>
                </form>
            </animated.div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto, voluptatem atque officia, tenetur similique quae obcaecati earum vero quibusdam sit quos laboriosam. Dolore unde recusandae voluptates debitis vel delectus reprehenderit, praesentium iusto quae ipsa, quaerat illum nam molestias molestiae minima deserunt provident sed. Vero quos sequi rerum voluptatum facilis repellendus enim et cumque, distinctio id exercitationem fuga consequuntur, quidem voluptatibus dolores molestias cum. Non odit quisquam ea? Ratione iste laudantium ducimus, doloribus, quis velit eveniet iure nostrum, dolor unde eius ut. Quo commodi quisquam, quia hic eveniet quae illum quasi excepturi! Animi autem laudantium maxime aut quam cumque sapiente nemo esse repellendus reiciendis quo enim illo, neque explicabo necessitatibus magnam et optio a accusantium doloremque in ipsum deserunt ullam. Assumenda facilis porro voluptas? Adipisci esse deserunt voluptatum iste vero ex obcaecati, provident accusamus perferendis, aperiam reiciendis sunt commodi expedita numquam inventore tempora omnis nisi. Velit, minima quidem culpa libero natus eius cumque explicabo, excepturi labore ipsa praesentium illum facere molestias asperiores molestiae vel quae ducimus ut harum. Neque eum quod necessitatibus doloribus asperiores magnam dignissimos deserunt vitae, sequi exercitationem culpa aliquam quasi sit rerum sed ea dolorum fugiat ratione, excepturi, velit beatae qui ipsa. Qui vero quod voluptatem illum.
            </p>

            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto, voluptatem atque officia, tenetur similique quae obcaecati earum vero quibusdam sit quos laboriosam. Dolore unde recusandae voluptates debitis vel delectus reprehenderit, praesentium iusto quae ipsa, quaerat illum nam molestias molestiae minima deserunt provident sed. Vero quos sequi rerum voluptatum facilis repellendus enim et cumque, distinctio id exercitationem fuga consequuntur, quidem voluptatibus dolores molestias cum. Non odit quisquam ea? Ratione iste laudantium ducimus, doloribus, quis velit eveniet iure nostrum, dolor unde eius ut. Quo commodi quisquam, quia hic eveniet quae illum quasi excepturi! Animi autem laudantium maxime aut quam cumque sapiente nemo esse repellendus reiciendis quo enim illo, neque explicabo necessitatibus magnam et optio a accusantium doloremque in ipsum deserunt ullam. Assumenda facilis porro voluptas? Adipisci esse deserunt voluptatum iste vero ex obcaecati, provident accusamus perferendis, aperiam reiciendis sunt commodi expedita numquam inventore tempora omnis nisi. Velit, minima quidem culpa libero natus eius cumque explicabo, excepturi labore ipsa praesentium illum facere molestias asperiores molestiae vel quae ducimus ut harum. Neque eum quod necessitatibus doloribus asperiores magnam dignissimos deserunt vitae, sequi exercitationem culpa aliquam quasi sit rerum sed ea dolorum fugiat ratione, excepturi, velit beatae qui ipsa. Qui vero quod voluptatem illum.
            </p>

            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto, voluptatem atque officia, tenetur similique quae obcaecati earum vero quibusdam sit quos laboriosam. Dolore unde recusandae voluptates debitis vel delectus reprehenderit, praesentium iusto quae ipsa, quaerat illum nam molestias molestiae minima deserunt provident sed. Vero quos sequi rerum voluptatum facilis repellendus enim et cumque, distinctio id exercitationem fuga consequuntur, quidem voluptatibus dolores molestias cum. Non odit quisquam ea? Ratione iste laudantium ducimus, doloribus, quis velit eveniet iure nostrum, dolor unde eius ut. Quo commodi quisquam, quia hic eveniet quae illum quasi excepturi! Animi autem laudantium maxime aut quam cumque sapiente nemo esse repellendus reiciendis quo enim illo, neque explicabo necessitatibus magnam et optio a accusantium doloremque in ipsum deserunt ullam. Assumenda facilis porro voluptas? Adipisci esse deserunt voluptatum iste vero ex obcaecati, provident accusamus perferendis, aperiam reiciendis sunt commodi expedita numquam inventore tempora omnis nisi. Velit, minima quidem culpa libero natus eius cumque explicabo, excepturi labore ipsa praesentium illum facere molestias asperiores molestiae vel quae ducimus ut harum. Neque eum quod necessitatibus doloribus asperiores magnam dignissimos deserunt vitae, sequi exercitationem culpa aliquam quasi sit rerum sed ea dolorum fugiat ratione, excepturi, velit beatae qui ipsa. Qui vero quod voluptatem illum.
            </p>
        </div>
    )
}
