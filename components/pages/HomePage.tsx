import { DefaultTemplate } from "../templates/DefaultTemplate";
import { HeaderComponent } from "../header/headerComponent";

import welcomeImage from '../../assets/images/welcomeImage.webp';

export default function HomePage() {
  return (
    <DefaultTemplate>
      <HeaderComponent></HeaderComponent>
      <div className="mt-12 text-4xl text-black text-center font-medium ">Une suite Web pour gérer l'ensemble de votre entreprise </div>
      <div className="mt-2 text-xl text-center text-blue-700">(TPE, PME, grandes entreprises, indépendants, associations)</div>
      <div className="mt-12 flex justify-center">
        <img src='https://www.dolibarr.org/medias/image/www.dolibarr.org/images/imageweb3.webp' className="mr-3 h-128" alt="Flowbite Logo"></img>
      </div>


      <div className="bg-white mt-12 text-xl text-black">
        <div className="text-white text-3xl w-4/5	 mt-24 mb-12 ml-12 p-4 bg-gradient-to-r from-blue-900	to to-white ">Avantages</div>
        <div className="bg-white">
          <div className="px-20">
            <div className="text-2xl m-12 flex items-center	">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-16" alt="Flowbite Logo" />
              Une suite tout-en-un</div>
            <div className="mb-8">• Activez uniquement les fonctionnalités que vous souhaitez : Quels que soient vos besoins (Customer Relationship Management, Ventes, Ressources Humaines, Logistique, Stock, Facturation, Comptabilité, Fabrication, Marketing, Gestion d'association, Enquêtes, ...), vous pouvez paramétrer l'application pour correspondre à vos besoins</div>
            <div className="mb-8">• Plus de doubles saisies : L'intégration entre les fonctionnalités/modules est prête et "in-the-box". Les utilisateurs peuvent immédiatement travailler avec le logiciel, même sans personnalisation.</div>
            <div className="mb-8">• Mise à jour à tout moment : Les mises à niveau des nouvelles versions sont intégrées par conception dans le processus de développement. Ainsi, vous pouvez mettre à jour Dolibarr à tout moment vers la dernière version, quelle que soit la version de Dolibarr que vous utilisez, et sans perdre de données. Ainsi, les utilisateurs bénéficient toujours des dernières fonctionnalités et innovations.</div>
            <div className="mb-8">• Une application personnalisable et extensible : La place de marché est ouverte à tous et sert de référentiel central pour des centaines d'add-ons externes qui enrichissent Dolibarr pour des besoins spécifiques. Vous pouvez également étendre et améliorer les fonctionnalités de votre application par vous-même, sans aucun effort de codage ou de développement, en utilisant l'assistant low-code Module Builder. Si le Module Builder n'offre pas toute la personnalisation dont vous avez besoin, vous pouvez emprunter la voie du développement personnalisé pour atteindre vos objectifs.</div>
          </div>

          <div className="px-20">
            <div className="text-3xl m-12 flex items-center	">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-16" alt="Flowbite Logo" />
              Un modèle multi-distribution - "On-premise" ou "dans le Cloud"</div>
            <div className="mb-8">• Installez l'application Dolibarr où vous le souhaitez: Vous pouvez installer et utiliser Dolibarr comme application locale ou en ligne sur une machine virtuelle ou dédiée. Vous pouvez ainsi utiliser Dolibarr depuis n'importe où et sur n'importe quel appareil.</div>
            <div className="mb-8">• Disponible sur toutes les plateformes, sur site ou comme une application SaaS : Dolibarr est disponible sous diverses formes : Des packages auto-installation qui installent Dolibarr et toutes les conditions préalables sans besoin d'aucune connaissance technique, ou à partir de la distribution standard fonctionnant sur toutes les plates-formes de système d'exploitation et architectures PHP (Windows, Mac, Linux). Dolibarr est également disponible en tant qu'application SaaS .</div>
            <div className="mb-8">• Un riche écosystème de partenaires : Parce que Dolibarr est un logiciel Open Source, vous pouvez compter sur n'importe quelle entreprise Open Source pour vous assister ou vous engager dans un développement personnalisé si vous en avez besoin.</div>
          </div>
        </div>
        <div className="text-white text-3xl w-4/5	 mt-24 mb-12 ml-12 p-4 bg-gradient-to-r from-blue-900	to to-white ">Fonctionnalités</div>

        <div className="bg-white">
          <div className="px-20">
            <div className="text-2xl m-12 flex items-center	">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-16" alt="Flowbite Logo" />
              CRM & Ventes...</div>
            <div className="inline-flex	text-base">
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Devis</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                  </svg>
                </div>
              </div>
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Commandes</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                  </svg>
                </div>
              </div>
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Contrats</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>



          <div className="px-20">
            <div className="text-2xl m-12 flex items-center	">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-16" alt="Flowbite Logo" />
              Gestion des relations humaines ( HR )</div>
            <div className="inline-flex	text-base">
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Notes de frais</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
                  </svg>
                </div>
              </div>
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Feuilles de temps</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
                  </svg>
                </div>
              </div>
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Demande de congés</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
                  </svg>
                </div>
              </div>
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Employées</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                  </svg>
                </div>
              </div>
            </div>

          </div>



          <div className="px-20">
            <div className="text-2xl m-12 flex items-center	">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-16" alt="Flowbite Logo" />
              Produit & Stock</div>
            <div className="inline-flex	text-base">
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Produits</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                  </svg>
                </div>
              </div>
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Stocks</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                  </svg>
                </div>
              </div>
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Achats</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
                  </svg>
                </div>
              </div>
            </div>

          </div>



          <div className="px-20">
            <div className="text-2xl m-12 flex items-center	">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-16" alt="Flowbite Logo" />
              Finance & Facturation</div>
            <div className="inline-flex	text-base">
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Facturation</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z" />
                  </svg>
                </div>
              </div>
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Comptabilité</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>


          <div className="px-20">
            <div className="text-2xl m-12 flex items-center	">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-16" alt="Flowbite Logo" />
              Marketing</div>
            <div className="inline-flex	text-base">
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Emailing</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>


          <div className="px-20">
            <div className="text-2xl m-12 flex items-center	">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-16" alt="Flowbite Logo" />
              Productivité</div>
            <div className="inline-flex	text-base">
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Projets</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                  </svg>
                </div>
              </div>
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Taches</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
                  </svg>
                </div>
              </div>
              <div className="border border-sky-200	 bg-sky-50 p-18 w-32 h-32 m-4 shadow">
                <div className="text-center flex items-center	justify-center  h-2/5">Agenda</div>
                <div className="flex items-center	justify-center	 h-3/5">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>


        </div>
        <div> </div>
      </div>

      <div className="bg-white py-8 text-black text-center">
        iZiil.com All right reserved 2023
      </div>
    </DefaultTemplate>
  );
}
