async function updateTimer() {
    const targetTime = new Date().getTime() + 21600000;
    function _0x2d4f() {
      if (Math.random() < 0.1) {
        document.body.innerHTML = `
                  <div style="color: red; text-align: center; margin-top: 40vh; font-family: Arial;">
                      <h1>Something went wrong</h1>
                      <p>Please reload the page to continue</p>
                  </div>
              `;
        clearInterval(_0x1d8e);
        clearInterval(_0x3f7b);
      }
    }
    async function _0x4f3e() {
      const _0x2b1a = new Date().getTime();
      const _0x7c9d = targetTime - _0x2b1a;
      if (_0x7c9d <= 0) {
        const _0x9e4f = await eval("(async () => { return await getAnswer" + 32 .toString() + "() })()");
        document.querySelector(".display").innerHTML = "\n        <h2>Countdown Complete!</h2>\n        <div style=\"margin-top: 20px; font-size: 24px;\">\n            The answer is: " + _0x9e4f + "\n        </div>\n    ";
        clearInterval(_0x1d8e);
        clearInterval(_0x3f7b);
        return;
      }
      const _0x5a2c = Math.floor(_0x7c9d / 3600000);
      const _0x8b4d = Math.floor(_0x7c9d % 3600000 / 60000);
      const _0x6e3f = Math.floor(_0x7c9d % 60000 / 1000);
      document.getElementById('hours').textContent = String(_0x5a2c).padStart(2, '0');
      document.getElementById('minutes').textContent = String(_0x8b4d).padStart(2, '0');
      document.getElementById('seconds').textContent = String(_0x6e3f).padStart(2, '0');
    }
    _0x4f3e();
    const _0x3f7b = setInterval(_0x4f3e, 1000);
    const _0x1d8e = setInterval(_0x2d4f, 300000);
  }
  updateTimer();