function hatvanyoz(tomb, hatvany) {
    if (!Array.isArray(tomb) || typeof hatvany !== 'number') {
      return [];
    }
    const eredmeny = tomb.map((szam) => Math.pow(szam, hatvany));
    return eredmeny;
  }
  
  console.log(hatvanyoz([1, 4, 7, 2, 5], 3)); 
  console.log(hatvanyoz('semmi', 5)); 
  