const fazendeiroModel = require("../models/CreateFazendeiroModel");

exports.baseDashboardView = async (req, res) => {
  try {
    const result = await fazendeiroModel.aggregate([
      {
        $group: {
          _id: null,
          count: { $sum: 1 },
          areaTotalCount: { $sum: "$areaTotal" },
          estados: { $push: "$estado" },
          culturasPlantadas: { $push: "$culturasPlantadas" },
          areaAgricultavelCount: { $sum: "$areaAgricultavel" },
          areaVegetacaoCount: { $sum: "$areaVegetacao" },
        },
      },
    ]);

    if (result.length > 0) {
      const counts = result[0];

      // Contar estados únicos
      const uniqueEstados = [...new Set(counts.estados.flat())];

      // Mapear estados e contar ocorrências
      const estadoData = uniqueEstados.map((estado) => ({
        label: estado,
        value: counts.estados.flat().filter((e) => e === estado).length,
      }));

      // Converter a matriz de culturas plantadas em uma única matriz
      const allCulturasPlantadas = counts.culturasPlantadas.flat();

      // Contar culturas únicas
      const uniqueCulturasPlantadas = [...new Set(allCulturasPlantadas)];
      const culturaData = uniqueCulturasPlantadas.map((cultura) => ({
        label: cultura,
        value: allCulturasPlantadas.filter((c) => c === cultura).length,
      }));

      const usoSoloData = [
        {
          label: "Área Agricultável",
          value: counts.areaAgricultavelCount,
        },
        {
          label: "Área Vegetação",
          value: counts.areaVegetacaoCount,
        },
      ];

      res.json({
        totalFazendas: counts.count,
        totalAreaFazendas: counts.areaTotalCount,
        areaAgricultavel: counts.areaAgricultavelCount,
        areaVegetacao: counts.areaVegetacaoCount,
        estados: estadoData,
        culturasPlantadas: culturaData,
        usoSolo: usoSoloData,
      });
    } else {
      res.json({
        totalFazendas: 0,
        totalAreaFazendas: 0,
        areaAgricultavel: 0,
        areaVegetacao: 0,
        estados: [],
        culturasPlantadas: [],
        usoSolo: [],
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
