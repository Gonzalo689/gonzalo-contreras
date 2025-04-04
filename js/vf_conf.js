// Cargar el widget de Voiceflow con la configuración obtenida desde la API
(function(d, t) {
  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
  v.onload = function() {
    window.voiceflow.chat.load({
      verify: { projectID: '{{voiceflow.projectid}}' },
      url: '{{voiceflow.url}}',
      versionID: '{{voiceflow.versionid}}',
      voice: {
        url: "{{voiceflow.voiceurl}}"
      }
    });
  }
  v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
})(document, 'script');
  