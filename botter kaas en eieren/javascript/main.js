var speler = 1;

function neerzetten(nummerblockje) {
  var mijnblockje = document.getElementById("blockje" + nummerblockje);
  if (mijnblockje.innerHTML == "") {
    if (speler == 1) {
      document.getElementById("blockje" + nummerblockje).innerHTML = "O";
      speler = 2;
    } else {
      document.getElementById("blockje" + nummerblockje).innerHTML = "X";
      speler = 1;
    }
    controleOfRijVolIs();
  }
}

function controleOfRijVolIs() {
  const speler1 = "O";
  const speler2 = "X";
  const winning_combinattions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  //heeft iemand een winnende combinatie?
  for (i = 0; i < winning_combinattions.length; i++) {
    if (
      document.getElementById("blockje" + winning_combinattions[i][2])
        .innerHTML ==
      document.getElementById("blockje" + winning_combinattions[i][1]).innerHTML
    ) {
      if (
        document.getElementById("blockje" + winning_combinattions[i][2])
          .innerHTML ==
        document.getElementById("blockje" + winning_combinattions[i][0])
          .innerHTML
      ) {
        if (
          document.getElementById("blockje" + winning_combinattions[i][0])
            .innerHTML != ""
        ) {
          alert(
            document.getElementById("blockje" + winning_combinattions[i][0])
              .innerHTML + " has won"
          );
          window.location = "";
        }
      }
    }
  }
}
