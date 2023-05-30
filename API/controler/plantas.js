var Plantas = require('../models/plantas')

// Plantas list
module.exports.all = () =>{
    return Plantas.find()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getPlanta = id =>{
    return Plantas.findOne({_id: id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.especies = especie => {
    return Plantas.find({"Espécie": especie})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
  }

module.exports.implantacoes = implantacao =>{
    return Plantas.find({"Implantação": implantacao})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.freguesias = () =>{
    return Plantas.distinct("Freguesia").sort()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.distinctEspecies = () =>{
    return Plantas.distinct("Espécie").sort()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}


module.exports.addPlantas = data =>{
    return Plantas.plantas.insertOne(data)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.deletePlanta = id =>{
    return Plantas.deleteOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}
