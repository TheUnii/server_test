class Clock{
    static hourFromSeconds(second){
        return this.minutesFromSeconds(second) / 60
    }

    static minutesFromSeconds(second){
        return second / 60
    }
}
