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


      <div className="mt-12 text-xl text-black">
        <div className="text-white text-3xl w-96 mt-24 mb-12 ml-12 p-4 bg-blue-900	">Avantages</div>
        <div className="flex">
          <div className="p-20">
            <div className="text-3xl m-12 flex items-center	">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-20" alt="Flowbite Logo" />
              Une suite tout-en-un</div>
            <div className="mb-8">• Activez uniquement les fonctionnalités que vous souhaitez : Quels que soient vos besoins (Customer Relationship Management, Ventes, Ressources Humaines, Logistique, Stock, Facturation, Comptabilité, Fabrication, Marketing, Gestion d'association, Enquêtes, ...), vous pouvez paramétrer l'application pour correspondre à vos besoins</div>
            <div className="mb-8">• Plus de doubles saisies : L'intégration entre les fonctionnalités/modules est prête et "in-the-box". Les utilisateurs peuvent immédiatement travailler avec le logiciel, même sans personnalisation.</div>
            <div className="mb-8">• Mise à jour à tout moment : Les mises à niveau des nouvelles versions sont intégrées par conception dans le processus de développement. Ainsi, vous pouvez mettre à jour Dolibarr à tout moment vers la dernière version, quelle que soit la version de Dolibarr que vous utilisez, et sans perdre de données. Ainsi, les utilisateurs bénéficient toujours des dernières fonctionnalités et innovations.</div>
            <div className="mb-8">• Une application personnalisable et extensible : La place de marché est ouverte à tous et sert de référentiel central pour des centaines d'add-ons externes qui enrichissent Dolibarr pour des besoins spécifiques. Vous pouvez également étendre et améliorer les fonctionnalités de votre application par vous-même, sans aucun effort de codage ou de développement, en utilisant l'assistant low-code Module Builder. Si le Module Builder n'offre pas toute la personnalisation dont vous avez besoin, vous pouvez emprunter la voie du développement personnalisé pour atteindre vos objectifs.</div>
          </div>

          <div className="p-20">
            <div className="text-3xl m-12 flex items-center	">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-20" alt="Flowbite Logo" />
              Un modèle multi-distribution - "On-premise" ou "dans le Cloud"</div>
            <div className="mb-8">• Installez l'application Dolibarr où vous le souhaitez: Vous pouvez installer et utiliser Dolibarr comme application locale ou en ligne sur une machine virtuelle ou dédiée. Vous pouvez ainsi utiliser Dolibarr depuis n'importe où et sur n'importe quel appareil.</div>
            <div className="mb-8">• Disponible sur toutes les plateformes, sur site ou comme une application SaaS : Dolibarr est disponible sous diverses formes : Des packages auto-installation qui installent Dolibarr et toutes les conditions préalables sans besoin d'aucune connaissance technique, ou à partir de la distribution standard fonctionnant sur toutes les plates-formes de système d'exploitation et architectures PHP (Windows, Mac, Linux). Dolibarr est également disponible en tant qu'application SaaS .</div>
            <div className="mb-8">• Un riche écosystème de partenaires : Parce que Dolibarr est un logiciel Open Source, vous pouvez compter sur n'importe quelle entreprise Open Source pour vous assister ou vous engager dans un développement personnalisé si vous en avez besoin.</div>
          </div>
        </div>
        <div className="text-white text-3xl 	w-96 mt-24 mb-12 ml-12 p-4 bg-blue-900	">Fonctionnalités</div>

        <div> </div>
      </div>
    </DefaultTemplate>
  );
}
