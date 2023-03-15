let options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
    },
    body: JSON.stringify({
        "model": "text-davinci-003",
        "prompt": "Say this is a test",
        "max_tokens": 7,
        "temperature": 0
      })
  }
  
fetch('https://api.openai.com/v1/completions', options)
  .then(response => response.json())
  .then(data => {
    
    if(data !== null && data !== undefined && data.choices[0]) {
        document.getElementById("toc").innerHTML = data.choices[0].text
    }
  });