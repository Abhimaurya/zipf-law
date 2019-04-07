import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css']
})
export class InputContainerComponent implements OnInit {
  @Output() toggleLoader = new EventEmitter<any>();
  @Output() setChartData = new EventEmitter<Object>();
  textData = 'It was 1978. I was new to New York. A rich acquaintance had invited me to a housewarming party, and, as my cabdriver wound his way down increasingly potholed and dingy streets, I began wondering whether hed got the address right. Finally he stopped at the doorway of a gloomy, unwelcoming industrial building. Two winos were crumpled on the steps, oblivious. There was no other sign of life in the whole street.I think you may have made a mistake, I ventured.But he hadnt. My friends voice called Top Floor! when I rang the bell, and I thought - knowing her sense of humour - Oh this is going to be some kind of joke! I was all ready to laugh. The elevator creaked and clanked slowly upwards, and I stepped out - into a multi-million dollar palace. The contrast with the rest of the building and the street outside couldnt have been starker.I just didnt understand. Why would anyone spend so much money building a place like that in a neighbourhood like this? Later I got into conversation with the hostess. Do you like it here? I asked. Its the best place Ive ever lived, she replied. But I mean, you know, is it an interesting neighbourhood? Oh, the neighbourhood? Well thats outside! she laughed.The incident stuck in my mind. How could you live so blind to your surroundings? How could you not think of where I live as including at least some of the space outside your four walls, some of the bits you couldnt lock up behind you? I felt this was something particular to New York: I called it The Small Here. I realised that, like most Europeans, I was used to living in a bigger Here.I noticed that this very local attitude to space in New York paralleled a similarly limited attitude to time. Everything was exciting, fast, current, and temporary. Enormous buildings came and went, careers rose and crashed in weeks. You rarely got the feeling that anyone had the time to think two years ahead, let alone ten or a hundred. Everyone seemed to be passing through. It was undeniably lively, but the downside was that it seemed selfish, irresponsible and randomly dangerous. I came to think of this as The Short Now, and this suggested the possibility of its opposite - The Long Now.';

  showHideLoader(){
  	console.log(this.textData)
  	//this.toggleLoader.emit();
  }

  onBlur(val){
  	this.textData = val;
  }

  processData(){
  	const words = this.textData.split(/[\s,.\!\?\-\"\d]+/);
  	const frequencyMap = {};
  	for(let i=0;i<words.length;i++){
  		if(frequencyMap[words[i]]){
  			frequencyMap[words[i]]++;
  		}
  		else{
  			frequencyMap[words[i]] = 1;
  		}
  	}

  	const wordLabels = [];
  	const frequencies = [];
  	const frequencyArray = [];
  	for(let i in frequencyMap){
  		frequencyArray.push([i,frequencyMap[i]]);
  	}
  	frequencyArray.sort((a,b)=>{
  		return b[1] - a[1]
  	})
  	for(let i=0;i<frequencyArray.length;i++){
  		wordLabels.push(frequencyArray[i][0]);
  		frequencies.push(frequencyArray[i][1]);
  	}
  	this.setChartData.emit({wordLabels,frequencies});
  }

  constructor() { }

  ngOnInit() {
  }

}
