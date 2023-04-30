import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {

  /**
   * Outputs a duration in a human-readable form.
   * @param diffInMS duration in milliseconds.
   */
  public transform(diffInMS: number): unknown {
    const diffInSecs = Math.trunc(diffInMS / 1000)

    const absDiffInSecs = Math.abs(diffInSecs)

    if (absDiffInSecs < 60) {
      return `${diffInSecs} ${diffInSecs === 1 ? $localize`second` : $localize`seconds`}`;
    }

    if (absDiffInSecs >= 60 && absDiffInSecs < 3600) {
      const minutes = Math.trunc(diffInSecs / 60)
      return `${minutes} ${minutes === 1 ? $localize`minute` : $localize`minutes`}`;
    }

    if (absDiffInSecs > 3600 && absDiffInSecs < 86400) {
      const hours = Math.trunc(diffInSecs / 3600)
      return `${hours} ${hours === 1 ? $localize`hour` : $localize`hours`}`;
    }

    if (absDiffInSecs >= 86400 && absDiffInSecs < 604800) {
      const days = Math.trunc(diffInSecs / 86400)
      return `${days} ${days === 1 ? $localize`day` : $localize`days`}`;
    }

    if (absDiffInSecs >= 604800 && absDiffInSecs < 2592000) {
      const weeks = Math.trunc(diffInSecs / 604800)
      return `${weeks} ${weeks === 1 ? $localize`week` : $localize`weeks`}`;
    }

    if (absDiffInSecs >= 2592000 && absDiffInSecs < 31536000) {
      const months = Math.trunc(diffInSecs / 2592000)
      return `${months} ${months === 1 ? $localize`month` : $localize`months`}`;
    }

    if (absDiffInSecs >= 31536000) {
      const years = Math.trunc(diffInSecs / 31536000)
      return `${years} ${years === 1 ? $localize`year` : $localize`years`}`;
    }

    return $localize`invalid data`;
  }
}
