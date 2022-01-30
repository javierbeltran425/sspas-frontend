import React, { useContext, useEffect } from "react";

/**
 * Context import
 */
import MenuContext from "../components/context/MenuContext";

export default function AxesPage() {
  const { selectedAxe } = useContext(MenuContext);

  return (
    <div className="w-full min-h-screen">
      <h1 className="text-black text-2xl font-bold p-4">VISTA DE EJES</h1>
      <h2 className="p-4">
        En la presente vista, podrán encontrar información sobre cada uno de los
        ejes de informcaión, como:
        <br />
        <ul className="list-disc ml-5">
          <li>Problemáticas</li>
          <li>Estratégias implementadas par abordar las problemáticas</li>
          <li>Resultados obtenidos</li>
        </ul>
      </h2>

      <br />
      <br />
      <p>EJE SELECCIONADO: {selectedAxe.nombre}</p>
      <p>ID: {selectedAxe.id}</p>
      <br />
      <br />

      <div className="w-full p-4">
        <div className="flex flex-col w-full min-h-screen outline outline-1 outline-gray-300 rounded-md">
          <h1 className="text-black font-bold text-xl p-4">Problemática</h1>
          <p className="p-4 text-base text-justify">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet iure
            debitis dolores voluptatum esse alias, maxime vero facere odio
            temporibus neque earum at eaque nemo. Nemo exercitationem natus
            eligendi adipisci. Repellendus, necessitatibus. Quas, reprehenderit!
            Consequuntur, id eaque optio hic nisi cupiditate aliquid delectus
            cum sed nesciunt dicta repellat deleniti eligendi sunt doloremque
            quas animi facere atque eveniet quod beatae dolores. Ipsam enim sint
            saepe fuga perferendis soluta nostrum veritatis unde error labore
            officia nisi vel adipisci blanditiis delectus recusandae quia
            cupiditate laudantium, quos quam voluptate dolorem repudiandae
            exercitationem. Nostrum, incidunt! Expedita quidem fugit fugiat
            iure, voluptatibus quasi architecto at quod ex maiores
            necessitatibus et ea, accusantium, amet nemo adipisci aliquid
            officia voluptatum vitae asperiores. Animi exercitationem optio
            eaque suscipit nemo?{" "}
          </p>

          <h2 className="text-black font-bold text-xl p-4">Estratégia</h2>
          <p className="p-4 text-base text-justify">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet iure
            debitis dolores voluptatum esse alias, maxime vero facere odio
            temporibus neque earum at eaque nemo. Nemo exercitationem natus
            eligendi adipisci. Repellendus, necessitatibus. Quas, reprehenderit!
            Consequuntur, id eaque optio hic nisi cupiditate aliquid delectus
            cum sed nesciunt dicta repellat deleniti eligendi sunt doloremque
            quas animi facere atque eveniet quod beatae dolores. Ipsam enim sint
            saepe fuga perferendis soluta nostrum veritatis unde error labore
            officia nisi vel adipisci blanditiis delectus recusandae quia
            cupiditate laudantium, quos quam voluptate dolorem repudiandae
            exercitationem. Nostrum, incidunt! Expedita quidem fugit fugiat
            iure, voluptatibus quasi architecto at quod ex maiores
            necessitatibus et ea, accusantium, amet nemo adipisci aliquid
            officia voluptatum vitae asperiores. Animi exercitationem optio
            eaque suscipit nemo?{" "}
          </p>

          <h3 className="text-black font-bold text-xl p-4">Resultados</h3>
          <div className="w-full p-4">
            <div className="flex flex-col w-full h-auto outline outline-1 outline-gray-300 rounded-md">
              <h4 className="text-black font-bold text-lg p-4">Resultado</h4>
              <p className="p-4 text-base text-justify">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                iure debitis dolores voluptatum esse alias, maxime vero facere
                odio temporibus neque earum at eaque nemo. Nemo exercitationem
                natus eligendi adipisci. Repellendus, necessitatibus. Quas,
                reprehenderit! Consequuntur, id eaque optio hic nisi cupiditate
                aliquid delectus cum sed nesciunt dicta repellat deleniti
                eligendi sunt doloremque quas animi facere atque eveniet quod
                beatae dolores. Ipsam enim sint saepe fuga perferendis soluta
                nostrum veritatis unde error labore officia nisi vel adipisci
                blanditiis delectus recusandae quia cupiditate laudantium, quos
                quam voluptate dolorem repudiandae exercitationem. Nostrum,
                incidunt! Expedita quidem fugit fugiat iure, voluptatibus quasi
                architecto at quod ex maiores necessitatibus et ea, accusantium,
                amet nemo adipisci aliquid officia voluptatum vitae asperiores.
                Animi exercitationem optio eaque suscipit nemo?{" "}
              </p>

              <h4 className="text-black font-bold text-lg p-4">Presupuesto</h4>
              <p className="p-4 text-base text-justify">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                iure debitis dolores voluptatum esse alias, maxime vero facere
                odio temporibus neque earum at eaque nemo. Nemo exercitationem
                natus eligendi adipisci. Repellendus, necessitatibus. Quas,
                reprehenderit! Consequuntur, id eaque optio hic nisi cupiditate
                aliquid delectus cum sed nesciunt dicta repellat deleniti
                eligendi sunt doloremque quas animi facere atque eveniet quod
                beatae dolores. Ipsam enim sint saepe fuga perferendis soluta
                nostrum veritatis unde error labore officia nisi vel adipisci
                blanditiis delectus recusandae quia cupiditate laudantium, quos
                quam voluptate dolorem repudiandae exercitationem. Nostrum,
                incidunt! Expedita quidem fugit fugiat iure, voluptatibus quasi
                architecto at quod ex maiores necessitatibus et ea, accusantium,
                amet nemo adipisci aliquid officia voluptatum vitae asperiores.
                Animi exercitationem optio eaque suscipit nemo?{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
