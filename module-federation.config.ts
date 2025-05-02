import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'fiap_mf_consumer_root',
  remotes: {
    'main': 'fiap_mf_main@http://localhost:3001/mf-manifest.json',
    'home': 'fiap_mf_home@http://localhost:3002/mf-manifest.json',
  },
  shareStrategy: 'loaded-first',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  dts: false,
});
