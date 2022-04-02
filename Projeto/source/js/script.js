function NumberFormat(input) {
  if (event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;
}

function ativaBtn() {
  let btnTaxa = document.getElementById("btnTaxa");
  let btnReal = document.getElementById("btnConverterReal");
  let btnDoll = document.getElementById("btnConverterDoll");
  document.getElementById("taxa").disabled = true;
  btnTaxa.disabled = true;
  btnTaxa.style.background = "#ffc107";
  btnTaxa.style.cursor = "not-allowed";
  btnReal.disabled = false;
  btnReal.style.background = "#038f00";
  btnReal.style.cursor = "pointer";
  btnDoll.disabled = false;
  btnDoll.style.background = "#038f00";
  btnDoll.style.cursor = "pointer";
}

function ativar(campo) {
  let btnTaxa = document.getElementById("btnTaxa");
  btnTaxa.disabled = true;

  if (campo !== null && campo !== 0 && campo !== "") {
    // btnTaxa.disabled = false;
    btnTaxa.disabled = false;
    btnTaxa.style.background = "#038f00";
    btnTaxa.style.cursor = "pointer";
  } else {
    btnTaxa.disabled = true;
    btnTaxa.style.background = "#606060";
    btnTaxa.style.cursor = "not-allowed";
  }
}

function limparBtn() {
  let inputTaxa = document.getElementById("taxa");
  let btnTaxa = document.getElementById("btnTaxa");
  let btnReal = document.getElementById("btnConverterReal");
  let btnDoll = document.getElementById("btnConverterDoll");
  inputTaxa.value = "";
  inputTaxa.disabled = false;
  btnReal.disabled = true;
  btnReal.style.cursor = "not-allowed";
  btnReal.style.background = "#606060";
  btnDoll.disabled = true;
  btnDoll.style.cursor = "not-allowed";
  btnDoll.style.background = "#606060";
  btnTaxa.disabled = true;
  btnTaxa.disabled = true;
  btnTaxa.style.cursor = "not-allowed";
  btnTaxa.style.background = "#606060";
}

function calcDoll() {
  var form = document.getElementById("section");
  let taxa = parseFloat(
    substituiVirgula(document.getElementById("taxa").value),
    10
  );
  let real = parseFloat(
    substituiVirgula(document.getElementById("real").value),
    10
  );

  let result = taxa * real;
  form.result.value = result.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function calcReal() {
  var form = document.getElementById("section");
  let taxa = parseFloat(
    substituiVirgula(document.getElementById("taxa").value),10
  );
  let doll = parseFloat(
    substituiVirgula(document.getElementById("doll").value),10
  );
  let result2 = taxa / doll;
  form.result2.value = result2.toLocaleString("pt-BR", {
    style: "currency",
    currency: "USD",
  });
}







function ValueFormat(campo, tammax, teclapres) {
  var tecla = teclapres.keyCode;
  var vr = campo.value;
  vr = vr.replace("/", "");
  vr = vr.replace("/", "");
  vr = vr.replace(",", "");
  vr = vr.replace(".", "");
  vr = vr.replace(".", "");
  vr = vr.replace(".", "");
  vr = vr.replace(".", "");
  tam = vr.length;

  if (tam < tammax && tecla != 8) {
    tam = vr.length + 1;
  }

  if (tecla == 8) {
    tam = tam - 1;
  }

  if (
    tecla == 8 ||
    (tecla >= 48 && tecla <= 57) ||
    (tecla >= 96 && tecla <= 105)
  ) {
    if (tam <= 1) {
      campo.value = vr;
    }
    tam = tam - 1;
    if (tam > 1 && tam <= 5) {
      campo.value = vr.substr(0, tam - 1) + "," + vr.substr(tam - 1, tam);
    }

    if (tam > 5 && tam <= 8) {
      campo.value = vr.substr(0, tam - 1) + "," + vr.substr(tam - 1, tam);
    }
  }
}


function substituiVirgula(valor) {
  if (valor.indexOf(",") >= 0) {
    var novoValor = valor.replace(",", ".");
    return novoValor;
  } else {
    return valor;
  }
}

