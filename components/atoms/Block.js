const Block = ({ devisData, marginTop, marginBottom, index, linePerPage, pgNumber, background, backgroundInfo }) => (
  <div
    className={"relative w-full  h-[1080px] pixels bg-contain bg-no-repeat m-auto "}
  >
    <img className="w-full h-full" src={`data:${backgroundInfo.mimeType};base64,${background}`} />
    <div className="absolute top-0 w-full h-full">
      <div className={`marginTop w-24 ` + (marginTop === 's' ? 'h-[5%]' : '')
        + (marginTop === 'm' ? 'h-[10%]' : '')
        + (marginTop === 'l' ? 'h-[15%]' : '')
        + (marginTop === 'xl' ? 'h-[20%]' : '')
        + (marginTop === 'xxl' ? 'h-[25%]' : '')}>
      </div>
      {
        index == 0 && <div>
          <div className="flex m-auto w-[85%]">
            <div className="w-1/2">
            </div>
            <div className="w-1/2 pl-[3rem] p-5">
              {
                devisData.lieu && devisData.date &&
                <div className="text-blue-900 text-[20px]">{devisData.lieu} le {devisData.date && (new Date(devisData.date)).toLocaleDateString("fr")}</div>
              }
            </div>
          </div>
          <div className="flex m-auto w-[85%]">
            <div className="w-1/2">
              <div className="text-blue-900 text-1xl">Projet:</div>
              <div className="text-blue-900 text-[20px]">
                {devisData.project.project_name}
              </div>
            </div>
            <div className="w-1/2 pl-[3rem] bg-gray-200 p-5 rounded border border-sky-500">
              <div className="text-blue-900 text-1xl">Adressé à:</div>
              <div className="flex mb-[3px] mt-[5px]">

                <div className="text-slate-500 text-1xl">Client :</div>

                <div className="self-center ml-2 text-1xl text-slate-500 font-bold">{devisData.client}</div>
              </div>

              <div className="flex mb-[3px]">

                <div className="text-slate-500 text-1xl">Adresse :</div>
                <div className="self-center ml-2  text-slate-500">{devisData.adresse}</div>
              </div>

              <div className="flex mb-[3px]">

                <div className="text-slate-500 text-1xl">ICE :</div>
                <div className="self-center ml-2  text-slate-500">{devisData.ICE}</div>
              </div>
            </div>
          </div>
          <div className="flex m-auto w-[85%]">
            <div className="my-[30px]">
              <div className="text-blue-900 text-[20px]">DEVIS N°: {devisData.code}</div>

              <div className="text-blue-900 text-[15px]"><b>Commentaire: </b> {devisData.description}</div>
            </div>
          </div>
        </div>
      }

      <div className="flex pb-10 text-xs text-gray-700">
        <div className="m-auto mt-[10px] w-full">
          {
            [1].map((t, g) => {
              const fromLine = 0;
              for (let j = 0; j < index; j++) {
                fromLine += Number(linePerPage[j]);
              }
              if (fromLine < devisData.devisList.length)
                return (

                  <table className="m-auto  text-sm text-left w-[85%]">
                    <thead className="text-[10px] text-white uppercase">
                      <tr>
                        <th scope="col" className="py-3 px-2 bg-[#1B5EA0] w-[50px]">
                          Poste
                        </th>
                        <th scope="col" className="py-3 px-14 bg-[#143F6A] w-[300px]">
                          DESIGNATION
                        </th>
                        <th scope="col" className="py-3 px-4 bg-[#1B5EA0] w-[50px]">
                          Unité
                        </th>
                        <th scope="col" className="py-3 px-2 bg-[#143F6A] w-[30px]">
                          Qaté
                        </th>
                        <th scope="col" className="py-3 px-2 bg-[#1B5EA0] w-[30px]">
                          PU
                        </th>
                        <th scope="col" className="py-3 px-2 bg-[#143F6A] w-[40px]">
                          PT
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[8px]">
                      {devisData &&
                        devisData.devisList &&
                        devisData.devisList.map((line, i) => {
                          const fromLine = 0;
                          const toLine = 0;
                          for (let j = 0; j < index + 1; j++) {
                            toLine += Number(linePerPage[j]);
                          }
                          for (let j = 0; j < index; j++) {
                            fromLine += Number(linePerPage[j]);
                          }
                          if (fromLine <= i && i < toLine) {

                            return (
                              <tr key={i} className="bg-gray-100">

                                <td
                                  scope="row"
                                  className="flex items-center py-1 px-2 font-medium text-gray-900 whitespace-nowrap  w-[50px]"
                                >
                                  <div className="">
                                    <div className="font-semibold">
                                      {line.poste}
                                    </div>
                                  </div>
                                </td>
                                <td className="py-1 px-2 w-[300px]">{line.designiation}</td>
                                <td className="py-1 px-2 w-[50px]">
                                  <div className="font-normal text-gray-500">
                                    {line.unity}
                                  </div>
                                </td>
                                <td className="py-1 px-2 w-[30px]">
                                  <div className="font-normal text-gray-500">
                                    {line.quantity}
                                  </div>
                                </td>

                                <td className="py-1 px-2 w-[30px]">
                                  <div className="font-normal text-gray-500">{line.PU}</div>
                                </td>

                                <td className="py-1 px-2 w-[40px]">
                                  <div className="font-normal text-gray-500">{line.PT}</div>
                                </td>
                              </tr>
                            );
                          }
                        })}
                    </tbody>
                  </table>
                )
            })
          }

          {/* Prix Total  */}
          {
            index == pgNumber - 1 && <div className="mt-[13px] m-auto w-[85%] ">
              <div className="justify-end flex items-center px-2 font-medium text-gray-900 whitespace-nowrap ">
                <div className="p-2 h-6 flex items-center ">
                  Prix Total (HT){" "}
                </div>
                <div className="py-1 px-2 bg-gray-300 w-[100px]">
                  {devisData.total.totalHT}
                </div>
              </div>
              <div className="justify-end flex items-center px-2 font-medium text-gray-900 whitespace-nowrap ">
                <div className="p-2 h-6 flex items-center ">
                  Remise{" %"}
                </div>
                <div className="py-1 px-2 bg-gray-100 w-[100px] ">
                  {devisData.total.remise}{" %"}
                </div>
              </div>

              <div className="justify-end flex items-center px-2 font-medium text-gray-900 whitespace-nowrap ">
                <div className="p-2 h-6 flex items-center ">
                  Prix Total apres remise (HT){" "}
                </div>
                <div className="py-1 px-2 bg-gray-300 w-[100px]">
                  {devisData.total.totalHTRemise}
                </div>
              </div>
              <div className="justify-end flex items-center px-2 font-medium text-gray-900 whitespace-nowrap ">
                <div className="p-2 h-6 flex items-center ">
                  Tax (20%){" "}
                </div>
                <div className="py-1 px-2 bg-gray-100 w-[100px] ">
                  {devisData.total.totalTVA}
                </div>
              </div>


              <div className="justify-end flex items-center px-2 font-medium text-gray-900 whitespace-nowrap ">
                <div className="p-4 h-12 flex items-center text-white bg-[#1B5EA0]">
                  Total (TTC){" "}
                </div>
                <div className="py-4 px-2 h-12 bg-[#143F6A] w-[100px] text-white">
                  {devisData.total.totalTTC}
                </div>
              </div>
            </div>
          }

        </div>
      </div>

      {
        index == pgNumber - 1 &&
        <div className="mt-[13px] m-auto w-[85%]">
          <div className="mt-8 mb-2 flex">
            <div className="font-semibold text-base leading-5 min-w-[180px]">
              Modalité de payment:{' '}
            </div>
            <div className="font-normal self-center text-sm">
              {devisData.modality}
            </div>
          </div>

          <div className="flex mb-2">
            <div className="font-semibold text-base leading-5 min-w-[180px]">
              Délai de livraison:{' '}
            </div>
            <div className="font-normal self-center text-sm">{devisData.delay}</div>
          </div>

          <div className="mb-8 flex">
            <div className="font-semibold text-base leading-5 min-w-[180px]">
              Garantie:{' '}
            </div>
            <div className="font-normal self-center text-sm">{devisData.garanty}</div>
          </div>
        </div>
      }
    </div>


  </div >
);

export default Block;
