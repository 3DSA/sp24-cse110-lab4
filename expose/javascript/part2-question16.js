for(const colorcar in statistics) {
    if(colorcar.charAt(0) == 'r' || statistics[colorcar] % 2 == 1) {
        console.log("${colorcar}: ${statistics[colorcar]}");
    }
}